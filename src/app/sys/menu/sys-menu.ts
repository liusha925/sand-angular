import { BaseEntity } from "app/base/base-entity";

/**
 * 系统菜单
 */
export class SysMenu extends BaseEntity {
  /**
   * 菜单ID
   */
  menuId: string;
  /**
   * 父菜单ID
   */
  parentId: string;
  /**
   * 菜单名称
   */
  menuName: string;
  /**
   * 菜单类型（M目录 C菜单 F按钮）
   */
  menuType: string;
  /**
   * 菜单URL
   */
  menuUrl: string;
  /**
   * 显示顺序
   */
  orderNum: number;
  /**
   * 打开方式（_item 页签中打开，_blank 新窗口打开，_current 当前窗口打开）
   */
  target: string;
  /**
   * 菜单状态（0显示 1隐藏）
   */
  visible: string;
  /**
   * 权限字符串
   */
  purview: string;
  /**
   * 菜单图标
   */
  icon: string;
}
