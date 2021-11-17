import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesCoreComponent } from './pages-core/pages-core.component';
import { LeftPanelComponent } from './common/left-panel/left-panel.component';
import { RightPanelComponent } from './common/right-panel/right-panel.component';
import { HeaderComponent } from './common/header/header.component';
import { ContentSectionComponent } from './content-section/content-section.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElementsComponent } from './components/elements/elements.component';
import { TablesComponent } from './components/tables/tables.component';
import { OrdersComponent } from './components/ecommerce/orders/orders.component';
import { OrderViewComponent } from './components/ecommerce/order-view/order-view.component';
import { ProductsComponent } from './components/ecommerce/products/products.component';
import { ProductEditComponent } from './components/ecommerce/product-edit/product-edit.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { OtherAppComponent } from './components/other-app/other-app.component';
import { DateTimePickerComponent } from './components/bootstrapComponent/date-time-picker/date-time-picker.component';
import { ColorPickersComponent } from './components/bootstrapComponent/color-pickers/color-pickers.component';
import { SelectComponent } from './components/bootstrapComponent/select/select.component';
import { SwitchComponent } from './components/bootstrapComponent/switch/switch.component';
import { FileUploadComponent } from './components/bootstrapComponent/file-upload/file-upload.component';
import { TouchspinComponent } from './components/bootstrapComponent/touchspin/touchspin.component';
import { IconsComponent } from './components/bootstrapComponent/icons/icons.component';
import { CodeEditorComponent } from './components/bootstrapComponent/code-editor/code-editor.component';
import { WYSIWYGEditorComponent } from './components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component';
import { WidgetsToolsComponent } from './components/bootstrapComponent/widgets-tools/widgets-tools.component';
import { ContextMenuComponent } from './components/bootstrapComponent/context-menu/context-menu.component';

import { ColorLibraryComponent } from './components/ui-features/color-library/color-library.component';
import { GridSystemComponent } from './components/ui-features/grid-system/grid-system.component';
import { GeneralComponentsComponent } from './components/ui-features/general-components/general-components.component';
import { ButtonsComponent } from './components/ui-features/buttons/buttons.component';
import { SpinnerButtonsComponent } from './components/ui-features/spinner-buttons/spinner-buttons.component';
import { FontIconsComponent } from './components/ui-features/font-icons/font-icons.component';
import { SoicalIconsComponent } from './components/ui-features/soical-icons/soical-icons.component';

import { FormControlComponent } from './components/form-stuff/form-control/form-control.component';
import { FormValidationComponent } from './components/form-stuff/form-validation/form-validation.component';
import { FormLayoutsComponent } from './components/form-stuff/form-layouts/form-layouts.component';
import { FormInputMaskComponent } from './components/form-stuff/form-input-mask/form-input-mask.component';
import { FormXEditableComponent } from './components/form-stuff/form-x-editable/form-x-editable.component';
import { FormWizardComponent } from './components/form-stuff/form-wizard/form-wizard.component';
import { ImageCroppingComponent } from './components/form-stuff/image-cropping/image-cropping.component';
import { MultipleFileUploadComponent } from './components/form-stuff/multiple-file-upload/multiple-file-upload.component';
import { DropzoneFileUploadComponent } from './components/form-stuff/dropzone-file-upload/dropzone-file-upload.component';

import { BoxedComponent } from './components/portlets/boxed/boxed.component';
import { LightComponent } from './components/portlets/light/light.component';
import { SolidComponent } from './components/portlets/solid/solid.component';
import { AjaxComponent } from './components/portlets/ajax/ajax.component';
import { DraggableComponent } from './components/portlets/draggable/draggable.component';

import { BlankPageComponent } from './components/pages-layouts/blank-page/blank-page.component';
import { AjaxContantLayoutComponent } from './components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component';
import { OffCanvasMobileMenuComponent } from './components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component';
import { ClassicPageHeadComponent } from './components/pages-layouts/classic-page-head/classic-page-head.component';
import { LightPageHeadComponent } from './components/pages-layouts/light-page-head/light-page-head.component';
import { BoxedPageComponent } from './components/pages-layouts/boxed-page/boxed-page.component';

import { LightSidebarMenuComponent } from './components/custom-layout/light-sidebar-menu/light-sidebar-menu.component';
import { HoverSidebarMenuComponent } from './components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component';
import { FixedSidebarLayoutComponent } from './components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component';
import { ClosedSidebarLayoutComponent } from './components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component';
import { OffcanvasSidebarLayoutComponent } from './components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    PagesCoreComponent,
    LeftPanelComponent,
    RightPanelComponent,
    HeaderComponent,
    ContentSectionComponent,
    DashboardComponent,
    ElementsComponent,
    TablesComponent,
    OrdersComponent,
    OrderViewComponent,
    ProductsComponent,
    ProductEditComponent,
    InvoiceComponent,
    AuthenticationComponent,
    OtherAppComponent,
    DateTimePickerComponent,
    ColorPickersComponent,
    SelectComponent,
    SwitchComponent,
    FileUploadComponent,
    TouchspinComponent,
    IconsComponent,
    CodeEditorComponent,
    WYSIWYGEditorComponent,
    WidgetsToolsComponent,
    ContextMenuComponent,
    ColorLibraryComponent,
    GridSystemComponent,
    GeneralComponentsComponent,
    ButtonsComponent,
    SpinnerButtonsComponent,
    FontIconsComponent,
    SoicalIconsComponent,
    FormControlComponent,
    FormValidationComponent,
    FormLayoutsComponent,
    FormInputMaskComponent,
    FormXEditableComponent,
    FormWizardComponent,
    ImageCroppingComponent,
    MultipleFileUploadComponent,
    DropzoneFileUploadComponent,
    BoxedComponent,
    LightComponent,
    SolidComponent,
    AjaxComponent,
    DraggableComponent,
    BlankPageComponent,
    AjaxContantLayoutComponent,
    OffCanvasMobileMenuComponent,
    ClassicPageHeadComponent,
    LightPageHeadComponent,
    BoxedPageComponent,
    LightSidebarMenuComponent,
    HoverSidebarMenuComponent,
    FixedSidebarLayoutComponent,
    ClosedSidebarLayoutComponent,
    OffcanvasSidebarLayoutComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
})
export class PagesModule { }
