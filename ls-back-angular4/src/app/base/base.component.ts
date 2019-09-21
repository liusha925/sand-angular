import { Location } from '@angular/common';

export class BaseComponent {
    msg: string = "";

    constructor(public location: Location) {
    }
    /**
     * 消息提示
     * @param msg
     */
    getMsg(msg: string) {
        this.msg = msg;
    }
    /**
     * 返回操作
     */
    goBack(): void {
        this.location.back();
    }

}
