export  default {
    onReachBottom(){
        this.setData({
            triggerState:!this.data.triggerState
        })
    }
}
