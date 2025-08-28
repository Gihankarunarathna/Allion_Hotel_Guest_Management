export function classNames(...xs: Array<string | false | undefined | null>) {
return xs.filter(Boolean).join(' ')
}
export function humanError(err: unknown): string {

if (typeof err === 'string') return err
if (err && typeof err === 'object') {
const anyErr = err as any
if (anyErr.message) return String(anyErr.message)
if (anyErr.data) {
try {
const msgs = Object.values(anyErr.data as Record<string, any>)
.map((v: any) => v?.message)
.filter(Boolean)
if (msgs.length) return msgs.join(', ')
} catch {}
}
}
return 'Something went wrong.'
}