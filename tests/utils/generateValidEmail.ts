export function generateValidEmail(prefix = 'test'): string {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 10000)
    return `${prefix}+${timestamp}${random}@example.com`
}