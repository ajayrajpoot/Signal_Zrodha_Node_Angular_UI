import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';
import { GlobalService } from 'src/app/service/global.service';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  asidebarHeight: number;
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  title: any;
  menuList: any;
  usermenuList: any;
  selected: any;
  ULPermition: any = [];
  cuser: any;
  restaurant: any = [];
  ssmenuList: { name: string; icon: string; subMenu: { name: string; icon: string; url: string; }[]; }[];
  ssmenuListAdmin: { name: string; icon: string; subMenu: { name: string; icon: string; url: string; }[]; }[];
  ssmenuListMentor: { name: string; icon: string; subMenu: { name: string; icon: string; url: string; }[]; }[];
  menuListAdminTest: any[];
  constructor(private layoutService: LayoutService,
    public gbl: GlobalService) {
    this.gbl.logedUser.subscribe(data => {
      console.log(">>logedUser:", data);
      this.cuser = data;
      // if (data.USER_TYPE == 0) {

      // } else {
      //   this.GET_PERMITION_BY_LEVEL_ID(data.USER_TYPE);

      // }
    })

  }

  isActive(item) {
    return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = (this.selected === item ? item : item);
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = (this.selected === item ? item : item);
  }


  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
    this.asidebarHeight = window.innerHeight;
  }



  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(setSidebarHeight => this.asidebarHeight = setSidebarHeight);

    this.title = 'EE';
    this.menuListAdminTest = [
      { name: 'News', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/news' },
      { name: 'login', icon: 'fas fa-tachometer-alt', url: '/ss/login' },
      { name: 'signup', icon: 'fas fa-tachometer-alt', url: '/ss/signup' },
      { name: 'wallet', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/wallet', },

    ]
    // Admin
    this.ssmenuListAdmin = [
      {
        name: 'Admin', icon: 'fas fa-shopping-cart', subMenu: [
          { name: 'mentors', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/mentors', },
          { name: 'subscriber', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/subscriber', },
          { name: 'News', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/news', },

        ]
      },
    ]
    // Mentor
    this.ssmenuListMentor = [
      {
        name: 'Mentor', icon: 'fas fa-shopping-cart', subMenu: [
          // { name: 'mentor', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/mentor', },
          // { name: 'mySignal', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/mySignal', },
          { name: 'signal', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/signal', },
          { name: 'plan', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/plan', },]
      },
    ]
    // Subscriber
    this.ssmenuList = [
      {
        name: 'Subscriber', icon: 'fas fa-shopping-cart', subMenu: [
          // { name: 'dashboard', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard', },
          { name: 'Dashboard', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/Broadcast', },
          // { name: 'News', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/news', },
          // { name: 'My Signal', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/signal', },
          // { name: 'subscriber', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/subscriber', },
          { name: 'myPlan', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/myPlan', },
          { name: 'signup', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/signup', },
          { name: 'login', icon: 'fas fa-tachometer-alt', url: '/ss/login', },
          { name: 'wallet', icon: 'fas fa-tachometer-alt', url: '/ss/dashboard/wallet', },
        ]
      },
    ]

    this.usermenuList = [
      {
        name: 'menu', icon: 'fas fa-shopping-cart', subMenu: [
          { name: 'login', icon: 'fas fa-tachometer-alt', url: '/ee/login', },
          { name: 'dashboard', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard', },
          { name: 'user', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard/user', },
          { name: 'category', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard/category', },
          { name: 'subcategory', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard/subcategory', },
          { name: 'product', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard/product', },
          { name: 'slider', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard/slider', },
          { name: 'store', icon: 'fas fa-tachometer-alt', url: '/ee/dashboard/store', },
        ]
      },
    ]
    this.menuList = [
      {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        url: '/dashboard',
      },
      {
        name: 'Users',
        icon: 'far fa-calendar-alt',
        url: '/users',
        badge: 'New',
        badgeBg: 'bg-danger',
      },
      {
        name: 'menu',
        icon: 'fas fa-shopping-cart',
        subMenu: [
          {
            name: 'SMTP',
            icon: 'far fa-circle',
            url: '/menu/menumaster',
          },
          {
            name: 'Mailers',
            icon: 'far fa-circle',
            url: '/menu/menurole',
          },
          {
            name: 'Mailers',
            icon: 'far fa-circle',
            url: '/menu/managemenurole',
          },
        ]
      },
      {
        name: 'mailer',
        icon: 'fas fa-shopping-cart',
        subMenu: [
          {
            name: 'SMTP',
            icon: 'far fa-circle',
            url: '/mailer/smtp',
          },
          {
            name: 'Mailers',
            icon: 'far fa-circle',
            url: '/mailer/mailers',
          },
        ]
      },
      {
        name: 'Setting',
        icon: 'fas fa-shopping-cart',
        subMenu: [
          {
            name: 'My Permition',
            icon: 'far fa-circle',
            url: '/setting/my-permition',
          },
          {
            name: 'Permition',
            icon: 'far fa-circle',
            url: '/setting/permition',
          },
          {
            name: 'Levels',
            icon: 'far fa-circle',
            url: '/setting/levels',
          },
        ]
      },


      // {
      //   name: 'Elements',
      //   icon: 'far fa-clone',
      //   url: '/elements',
      //   badge: '2',
      //   badgeBg: 'bg-success',
      // },
      // {
      //   name: 'Tables',
      //   icon: 'far fa-calendar-alt',
      //   url: '/tables',
      //   badge: 'New',
      //   badgeBg: 'bg-danger',
      // },
      // {
      //   name: 'eCommerce',
      //   icon: 'fas fa-shopping-cart',
      //   subMenu: [
      //     {
      //       name: 'Orders',
      //       icon: 'far fa-circle',
      //       url: '/orders',
      //     },
      //     {
      //       name: 'Order View',
      //       icon: 'far fa-circle',
      //       url: '/order-view',
      //     },
      //     {
      //       name: 'Products',
      //       icon: 'far fa-circle',
      //       url: '/products',
      //     },
      //     {
      //       name: 'Product Edit',
      //       icon: 'far fa-circle',
      //       url: '/product-edit',
      //     },
      //   ]
      // },
      // {
      //   name: 'Components',
      //   icon: 'far fa-sun',
      //   subMenu: [
      //     {
      //       name: 'Date & Time Picker',
      //       icon: 'far fa-circle',
      //       url: '/date-time-picker',
      //     },
      //     {
      //       name: 'Color Pickers',
      //       icon: 'far fa-circle',
      //       url: '/color-pickers',
      //     },
      //     {
      //       name: 'Bootstrap Select',
      //       icon: 'far fa-circle',
      //       url: '/select',
      //     },
      //     {
      //       name: 'Bootstrap Switch',
      //       icon: 'far fa-circle',
      //       url: '/switch',
      //     },
      //     {
      //       name: 'Bootstrap file upload',
      //       icon: 'far fa-circle',
      //       url: '/file-upload',
      //     },
      //     {
      //       name: 'Bootstrap TouchSpin',
      //       icon: 'far fa-circle',
      //       url: '/touchspin',
      //     },
      //     {
      //       name: 'Bootstrap Icons',
      //       icon: 'far fa-circle',
      //       url: '/icons',
      //     },
      //     {
      //       name: 'Code Editor',
      //       icon: 'far fa-circle',
      //       url: '/code-editor',
      //     },
      //     {
      //       name: 'WYSIWYG Editor',
      //       icon: 'far fa-circle',
      //       url: '/WYSIWYG-editor',
      //     },
      //     {
      //       name: 'Widgets & Tools',
      //       icon: 'far fa-circle',
      //       url: '/widgets-tools',
      //     },
      //     {
      //       name: 'Context Menu',
      //       icon: 'far fa-circle',
      //       url: '/context-menu',
      //     },

      //   ]
      // },
      // {
      //   name: 'UI Features',
      //   icon: 'far fa-gem',
      //   subMenu: [
      //     {
      //       name: 'Color Library',
      //       icon: 'far fa-circle',
      //       url: '/color-library',
      //     },
      //     {
      //       name: 'Grid System',
      //       icon: 'far fa-circle',
      //       url: '/grid-system',
      //     },
      //     {
      //       name: 'General Components',
      //       icon: 'far fa-circle',
      //       url: '/general-components',
      //     },
      //     {
      //       name: 'Buttons',
      //       icon: 'far fa-circle',
      //       url: '/buttons',
      //     },
      //     {
      //       name: 'Spinner Buttons',
      //       icon: 'far fa-circle',
      //       url: '/spinner-buttons',
      //     },
      //     {
      //       name: 'Font Icons',
      //       icon: 'far fa-circle',
      //       url: '/font-icons',
      //     },
      //     {
      //       name: 'Social Icons',
      //       icon: 'far fa-circle',
      //       url: '/soical-icons',
      //     }
      //   ]
      // },
      // {
      //   name: 'Form Stuff',
      //   icon: 'far fa-edit',
      //   subMenu: [
      //     {
      //       name: 'Form Control',
      //       icon: 'far fa-circle',
      //       url: '/form-control',
      //     },
      //     {
      //       name: 'Form Validation',
      //       icon: 'far fa-circle',
      //       url: '/form-validation',
      //     },
      //     {
      //       name: 'Form Layouts',
      //       icon: 'far fa-circle',
      //       url: '/form-layouts',
      //     },
      //     {
      //       name: 'Form Input Mask',
      //       icon: 'far fa-circle',
      //       url: '/form-input-mask',
      //     },
      //     {
      //       name: 'Form X-editable',
      //       icon: 'far fa-circle',
      //       url: '/form-X-editable',
      //     },
      //     {
      //       name: 'Form Wizard',
      //       icon: 'far fa-circle',
      //       url: '/form-wizard',
      //     },
      //     {
      //       name: 'Image Cropping',
      //       icon: 'far fa-circle',
      //       url: '/image-cropping',
      //     },
      //     {
      //       name: 'Multiple File Upload',
      //       icon: 'far fa-circle',
      //       url: '/multiple-file-upload',
      //     },
      //     {
      //       name: 'Dropzone File Upload',
      //       icon: 'far fa-circle',
      //       url: '/dropzone-file-upload',
      //     }
      //   ]
      // },
      // {
      //   name: 'Portlets',
      //   icon: 'far fa-bookmark',
      //   subMenu: [
      //     {
      //       name: 'Boxed Portlets',
      //       icon: 'far fa-circle',
      //       url: '/boxed-portlets',
      //     },
      //     {
      //       name: 'Light Portlets',
      //       icon: 'far fa-circle',
      //       url: '/light-portlets',
      //     },
      //     {
      //       name: 'Solid Portlets',
      //       icon: 'far fa-circle',
      //       url: '/solid-portlets',
      //     },
      //     {
      //       name: 'Ajax Portles',
      //       icon: 'far fa-circle',
      //       url: '/ajax-portles',
      //     },
      //     {
      //       name: 'Draggable Portlets',
      //       icon: 'far fa-circle',
      //       url: '/draggable-portlets',
      //     },
      //   ]
      // },
      // {
      //   name: 'Pages Layouts',
      //   icon: 'far fa-list-alt',
      //   subMenu: [
      //     {
      //       name: 'Blank Page',
      //       icon: 'far fa-circle',
      //       url: '/blank-page',
      //     },
      //     {
      //       name: 'Ajax Contant',
      //       icon: 'far fa-circle',
      //       url: '/ajax-contant-layout',
      //     },
      //     {
      //       name: 'Off-Canvas Menu',
      //       icon: 'far fa-circle',
      //       url: '/off-canvas-mobile-menu',
      //     },
      //     {
      //       name: 'Classic Page Head',
      //       icon: 'far fa-circle',
      //       url: '/classic-page-head',
      //     },
      //     {
      //       name: 'Light Page Head',
      //       icon: 'far fa-circle',
      //       url: '/light-page-head',
      //     },
      //     {
      //       name: 'Boxed Page',
      //       icon: 'far fa-circle',
      //       url: '/boxed-page',
      //     }
      //   ]
      // },
      // {
      //   name: 'Custom Layout',
      //   icon: 'far fa-paper-plane',
      //   subMenu: [
      //     {
      //       name: 'Light Sidebar',
      //       icon: 'far fa-circle',
      //       url: '/light-sidebar-menu',
      //     },
      //     {
      //       name: 'Hover Sidebar',
      //       icon: 'far fa-circle',
      //       url: '/hover-sidebar-menu',
      //     },
      //     {
      //       name: 'Fixed Sidebar',
      //       icon: 'far fa-circle',
      //       url: '/fixed-sidebar-layout',
      //     },
      //     {
      //       name: 'Closed Sidebar',
      //       icon: 'far fa-circle',
      //       url: '/closed-sidebar-layout',
      //     },
      //     {
      //       name: 'Offcanvas Sidebar',
      //       icon: 'far fa-circle',
      //       url: '/offcanvas-sidebar-layout',
      //     }
      //   ]
      // },
      // {
      //   name: 'Invoice',
      //   icon: 'far fa-file-alt',
      //   url: '/invoice-summary',
      // },
      // {
      //   name: 'Authentication',
      //   icon: 'far fa-user-circle',
      //   url: '/authentication',
      // },
      // {
      //   name: 'Other App',
      //   icon: 'far fa-comments',
      //   url: '/other-app',
      //   badge: 'New',
      //   badgeBg: 'bg-warning',
      // },

    ];
    this.restaurant = [{
      name: 'Restaurant',
      icon: 'fas fa-shopping-cart',
      subMenu: [
        {
          name: 'Address',
          icon: 'far fa-circle',
          url: '/restaurant/Address',
        },
        {
          name: 'Category ',
          icon: 'far fa-circle',
          url: '/restaurant/Category',
        },
        {
          name: 'Dishes',
          icon: 'far fa-circle',
          url: '/restaurant/Dishes',

        },
        {
          name: 'GstLot  ',
          icon: 'far fa-circle',
          url: '/restaurant/GstLot',

        },
        {
          name: 'Order  ',
          icon: 'far fa-circle',
          url: '/restaurant/Order',

        },
        {
          name: 'ReviewCart  ',
          icon: 'far fa-circle',
          url: '/restaurant/ReviewCart',

        }
      ]
    }]

  }
  fmenuList0: any = [];
  fmenuList: any = [];
  finalMenu() {
    console.log("menuList", this.menuList.length)
    var index = -1;
    this.menuList.forEach((m, index1) => {


      if (m.subMenu == undefined) {
        if (this.checkMenu(m.url)) {
          this.fmenuList.push(m);
          index++;
        }
        return;
      } else {
        this.fmenuList.push(m);
        index++;
        var subMenu = m.subMenu;
        this.fmenuList[index].subMenu = [];
        if ((m.subMenu)) {
          subMenu.forEach(sm => {
            if (this.checkMenu(sm.url)) {
              this.fmenuList[index].subMenu.push(sm);
            }
          });
        }
      }
      //  this.fmenuList0=this.fmenuList.forEach(data=>{
      //    if(m.subMenu == undefined) {return true;}else{return data.subMenu.length!=0;};})
    });
  }
  GET_PERMITION_BY_LEVEL_ID(level_id) {
    this.gbl.GET_PERMITION_BY_LEVEL_ID({ level_id: level_id }).subscribe(data => {
      this.ULPermition = data.DtResult;
      this.finalMenu();
    }, error => {
      this.gbl.tostError("Server Not respond");
    })
  }

  checkMenu(url) {
    var isvalied = this.ULPermition.find(data => data.url == url);
    if (isvalied == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
