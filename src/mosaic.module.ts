import { NgModule } from '@angular/core';
import { McLuxonDateModule } from '@ptsecurity/mosaic-luxon-adapter/adapter';
import { McAutocompleteModule } from '@ptsecurity/mosaic/autocomplete';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McButtonToggleModule } from '@ptsecurity/mosaic/button-toggle';
import { McCardModule } from '@ptsecurity/mosaic/card';
import { McCheckboxModule } from '@ptsecurity/mosaic/checkbox';
import { McCodeBlockModule } from '@ptsecurity/mosaic/code-block';
import { McHighlightModule, McPseudoCheckboxModule, McFormattersModule } from '@ptsecurity/mosaic/core';
import { McDatepickerModule } from '@ptsecurity/mosaic/datepicker';
import { McDividerModule } from '@ptsecurity/mosaic/divider';
import { McDropdownModule } from '@ptsecurity/mosaic/dropdown';
import { McFileUploadModule } from '@ptsecurity/mosaic/file-upload';
import { McFormFieldModule } from '@ptsecurity/mosaic/form-field';
import { McIconModule } from '@ptsecurity/mosaic/icon';
import { McInputModule } from '@ptsecurity/mosaic/input';
import { McLinkModule } from '@ptsecurity/mosaic/link';
import { McListModule } from '@ptsecurity/mosaic/list';
import { McLoaderOverlayModule } from '@ptsecurity/mosaic/loader-overlay';
import { McMarkdownModule } from '@ptsecurity/mosaic/markdown';
import { McModalModule } from '@ptsecurity/mosaic/modal';
import { McNavbarModule } from '@ptsecurity/mosaic/navbar';
import { McPopoverModule } from '@ptsecurity/mosaic/popover';
import { McProgressBarModule } from '@ptsecurity/mosaic/progress-bar';
import { McProgressSpinnerModule } from '@ptsecurity/mosaic/progress-spinner';
import { McRadioModule } from '@ptsecurity/mosaic/radio';
import { McSelectModule } from '@ptsecurity/mosaic/select';
import { McSidebarModule } from '@ptsecurity/mosaic/sidebar';
import { McSidepanelModule } from '@ptsecurity/mosaic/sidepanel';
import { McSplitterModule } from '@ptsecurity/mosaic/splitter';
import { McTableModule } from '@ptsecurity/mosaic/table';
import { McTabsModule } from '@ptsecurity/mosaic/tabs';
import { McTagsModule } from '@ptsecurity/mosaic/tags';
import { McTextareaModule } from '@ptsecurity/mosaic/textarea';
import { McTimepickerModule } from '@ptsecurity/mosaic/timepicker';
import { McTimezoneModule } from '@ptsecurity/mosaic/timezone';
import { McToastModule } from '@ptsecurity/mosaic/toast';
import { McToggleModule } from '@ptsecurity/mosaic/toggle';
import { McToolTipModule } from '@ptsecurity/mosaic/tooltip';
import { McTreeModule } from '@ptsecurity/mosaic/tree';
import { McTreeSelectModule } from '@ptsecurity/mosaic/tree-select';


const MC_COMPONENTS = [
    McAutocompleteModule,
    McButtonModule,
    McButtonToggleModule,
    McCardModule,
    McCheckboxModule,
    McDatepickerModule,
    McDividerModule,
    McDropdownModule,
    McFormFieldModule,
    McIconModule,
    McInputModule,
    McLinkModule,
    McListModule,
    McLoaderOverlayModule,
    McMarkdownModule,
    McModalModule,
    McLuxonDateModule,
    McNavbarModule,
    McPopoverModule,
    McProgressBarModule,
    McProgressSpinnerModule,
    McRadioModule,
    McSelectModule,
    McSidebarModule,
    McSidepanelModule,
    McSplitterModule,
    McTableModule,
    McTabsModule,
    McTagsModule,
    McTextareaModule,
    McTimepickerModule,
    McTimezoneModule,
    McToggleModule,
    McToolTipModule,
    McToastModule,
    McTreeModule,
    McTreeSelectModule,
    McFileUploadModule,
    McCodeBlockModule
];

const MC_CORE = [
    McHighlightModule,
    McPseudoCheckboxModule,
    McFormattersModule
];


@NgModule({
    exports: [
        ...MC_COMPONENTS,
        ...MC_CORE
    ]
})
export class DemoMosaicModule {}
