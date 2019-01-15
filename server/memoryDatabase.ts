class MemoryDatabase {
    /**
     * 封禁用户列表
     */
    private sealUserList: Set<string> = new Set()

    /**
     * 最近24小时新注册用户列表
     */
    private newRegisterList: Set<string> = new Set()
}