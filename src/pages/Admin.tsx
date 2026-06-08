import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const SUBMISSIONS_URL = "https://functions.poehali.dev/fe9f25a9-9a6c-4aec-bc1a-f263c6be8004";
const PASSWORD = "Swat_sloth139";

interface Submission {
  id: number;
  name: string;
  phone: string;
  message: string;
  created_at: string;
}

const Admin = ({ onClose }: { onClose?: () => void }) => {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pw === PASSWORD) {
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    fetch(SUBMISSIONS_URL)
      .then((r) => r.json())
      .then((data) => {
        const parsed = typeof data === "string" ? JSON.parse(data) : data;
        setSubmissions(parsed.submissions || []);
      })
      .finally(() => setLoading(false));
  }, [authed]);

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("en-CA", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", hour12: true,
    });
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-lawn-cream font-nunito flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl border border-lawn-green/20 shadow-sm p-10 w-full max-w-sm">
          <div className="text-center mb-8">
            <span className="text-4xl">🔒</span>
            <h1 className="font-fredoka text-2xl font-bold text-lawn-dark mt-3">Admin Access</h1>
            <p className="text-muted-foreground text-sm mt-1">Enter your password to view submissions</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full border border-lawn-green/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lawn-green bg-lawn-pale"
            />
            {error && <p className="text-red-500 text-sm text-center">Incorrect password</p>}
            <button
              type="submit"
              className="w-full bg-lawn-green text-white font-fredoka font-bold py-3 rounded-full hover:bg-lawn-dark transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lawn-cream font-nunito">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌱</span>
            <div>
              <h1 className="font-fredoka text-3xl font-bold text-lawn-dark">Submissions</h1>
              <p className="text-muted-foreground text-sm">{submissions.length} customer request{submissions.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
          <button onClick={() => { setAuthed(false); onClose?.(); }} className="text-sm text-muted-foreground hover:text-lawn-dark transition-colors flex items-center gap-1">
            <Icon name="LogOut" size={14} /> Log out
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground">Loading...</div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-lawn-green/20">
            <div className="text-4xl mb-3">📭</div>
            <p className="text-lawn-dark font-semibold">No submissions yet</p>
            <p className="text-muted-foreground text-sm mt-1">When customers fill out your form, they'll appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl border border-lawn-green/20 shadow-sm p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="User" size={16} className="text-lawn-green" />
                      <span className="font-fredoka font-bold text-lawn-dark text-lg">{s.name}</span>
                    </div>
                    {s.phone && (
                      <a href={`tel:${s.phone}`} className="flex items-center gap-2 text-lawn-green hover:text-lawn-dark transition-colors text-sm mb-2">
                        <Icon name="Phone" size={14} />
                        {s.phone}
                      </a>
                    )}
                    {s.message && (
                      <p className="text-muted-foreground text-sm bg-lawn-pale rounded-xl px-4 py-3 mt-2">{s.message}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{formatDate(s.created_at)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;