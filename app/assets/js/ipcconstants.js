// NOTE FOR THIRD-PARTY
// REPLACE THIS CLIENT ID WITH YOUR APPLICATION ID.
// SEE https://github.com/dscalzi/HeliosLauncher/blob/master/docs/MicrosoftAuth.md
exports.AZURE_CLIENT_ID = '1ce6e35a-126f-48fd-97fb-54d143ac6d45' // block of the wild client id: 0220635f-2e18-4b2c-9d2e-70f8f635323b
// SEE NOTE ABOVE.


// Opcodes
exports.MSFT_OPCODE = {
    OPEN_LOGIN: 'MSFT_AUTH_OPEN_LOGIN',
    OPEN_logoUT: 'MSFT_AUTH_OPEN_logoUT',
    REPLY_LOGIN: 'MSFT_AUTH_REPLY_LOGIN',
    REPLY_logoUT: 'MSFT_AUTH_REPLY_logoUT'
}
// Reply types for REPLY opcode.
exports.MSFT_REPLY_TYPE = {
    SUCCESS: 'MSFT_AUTH_REPLY_SUCCESS',
    ERROR: 'MSFT_AUTH_REPLY_ERROR'
}
// Error types for ERROR reply.
exports.MSFT_ERROR = {
    ALREADY_OPEN: 'MSFT_AUTH_ERR_ALREADY_OPEN',
    NOT_FINISHED: 'MSFT_AUTH_ERR_NOT_FINISHED'
}

exports.SHELL_OPCODE = {
    TRASH_ITEM: 'TRASH_ITEM'
}