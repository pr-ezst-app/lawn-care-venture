import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    """Send contact form submission to Marcus's email."""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', 'Unknown')
    phone = body.get('phone', 'Not provided')
    message = body.get('message', 'No message')

    smtp_user = os.environ['SMTP_USER']
    smtp_pass = os.environ['SMTP_PASS']
    to_email = 'jackstuckles@gmail.com'

    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg['Subject'] = f"New Lawn Care Request from {name}"

    body_text = f"""You got a new request on your lawn care website!

Name: {name}
Phone: {phone}
Message: {message}

Reply to this email or call them back!
"""
    msg.attach(MIMEText(body_text, 'plain'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(smtp_user, smtp_pass)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'success': True})
    }
