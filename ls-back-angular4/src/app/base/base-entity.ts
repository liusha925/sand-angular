/**
 * 基础属性
 */
export class BaseEntity {
    /**
     * 创建者
     */
    createBy: string;
    /**
     * 更新者
     */
    updateBy: string;
    /**
     * 创建时间
     */
    createTime: Date;
    /**
     * 更新时间
     */
    updateTime: Date;
    /**
     * 备注信息
     */
    remark: string;
}