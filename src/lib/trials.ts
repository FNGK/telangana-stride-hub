export type TrialStatus = "submitted" | "reviewing" | "shortlisted" | "rejected";

export interface TrialRecord {
  id: string;
  name: string;
  age: number;
  position: "GK" | "DEF" | "MID" | "FWD";
  phone: string;
  email: string;
  message?: string;
  status: TrialStatus;
  submittedAt: string;
}

const KEY = "hgfc.trials.v1";

const read = (): TrialRecord[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TrialRecord[]) : [];
  } catch {
    return [];
  }
};

const write = (list: TrialRecord[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent("hgfc:trials-updated"));
  } catch {
    /* ignore quota errors */
  }
};

export const listTrials = (): TrialRecord[] =>
  read().sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));

export const addTrial = (data: Omit<TrialRecord, "id" | "status" | "submittedAt">): TrialRecord => {
  const record: TrialRecord = {
    ...data,
    id: `t_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    status: "submitted",
    submittedAt: new Date().toISOString(),
  };
  write([record, ...read()]);
  return record;
};

export const updateTrialStatus = (id: string, status: TrialStatus) => {
  write(read().map((t) => (t.id === id ? { ...t, status } : t)));
};

export const removeTrial = (id: string) => {
  write(read().filter((t) => t.id !== id));
};

export const STATUS_META: Record<TrialStatus, { label: string; tone: string }> = {
  submitted: { label: "Submitted", tone: "bg-background/15 text-background border-background/30" },
  reviewing: { label: "Under Review", tone: "bg-accent/20 text-accent border-accent/40" },
  shortlisted: { label: "Shortlisted", tone: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" },
  rejected: { label: "Not selected", tone: "bg-destructive/20 text-destructive border-destructive/40" },
};