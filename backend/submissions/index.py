import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Handle saving and fetching contact form submissions."""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    method = event.get('httpMethod')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    if method == 'POST':
        raw_body = event.get('body', '{}')
        body = json.loads(raw_body) if isinstance(raw_body, str) else raw_body
        name = body.get('name', '')
        phone = body.get('phone', '')
        message = body.get('message', '')

        cur.execute(
            "INSERT INTO contact_submissions (name, phone, message) VALUES (%s, %s, %s) RETURNING id",
            (name, phone, message)
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': {'success': True, 'id': new_id}
        }

    if method == 'GET':
        cur.execute("SELECT id, name, phone, message, created_at FROM contact_submissions ORDER BY created_at DESC")
        rows = cur.fetchall()
        cur.close()
        conn.close()

        submissions = [
            {'id': r[0], 'name': r[1], 'phone': r[2], 'message': r[3], 'created_at': r[4].isoformat()}
            for r in rows
        ]

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': {'submissions': submissions}
        }

    return {'statusCode': 405, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': 'Method not allowed'}
