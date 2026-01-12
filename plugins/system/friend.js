import cfg from "../../lib/config/config.js"

export class friend extends plugin {
  constructor() {
    super({
      name: "autoFriend",
      dsc: "自动同意好友",
      event: "request.friend",
    })
  }

  async accept() {
    if (this.e.sub_type == "add" || this.e.sub_type == "single") {
      if (cfg.other.autoFriend == 1 || cfg.other.autoFriend == this.e.self_id) {
        logger.mark(`[自动同意][添加好友] ${this.e.user_id}`)
        await Bot.sleep(3000)
        this.e.approve(true)
      }
    }
  }
}
