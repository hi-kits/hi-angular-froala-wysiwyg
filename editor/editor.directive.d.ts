import { ControlValueAccessor } from "@angular/forms";
import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class FroalaEditorDirective implements ControlValueAccessor {
    private zone;
    private _opts;
    private _element;
    private SPECIAL_TAGS;
    private INNER_HTML_ATTR;
    private _hasSpecialTag;
    private _editor;
    private _model;
    private _editorInitialized;
    private _oldModel;
    constructor(el: ElementRef, zone: NgZone);
    onChange: (_: any) => void;
    onTouched: () => void;
    writeValue(content: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    froalaEditor: any;
    froalaModel: any;
    private updateEditor;
    froalaModelChange: EventEmitter<any>;
    froalaInit: EventEmitter<Object>;
    private updateModel;
    private registerEvent;
    private initListeners;
    private createEditor;
    private setHtml;
    private setContent;
    private destroyEditor;
    private getEditor;
    private generateManualController;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FroalaEditorDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FroalaEditorDirective, "[froalaEditor]", ["froalaEditor"], { "froalaEditor": "froalaEditor"; "froalaModel": "froalaModel"; }, { "froalaModelChange": "froalaModelChange"; "froalaInit": "froalaInit"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJlZGl0b3IuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRnJvYWxhRWRpdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHJpdmF0ZSB6b25lO1xyXG4gICAgcHJpdmF0ZSBfb3B0cztcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIFNQRUNJQUxfVEFHUztcclxuICAgIHByaXZhdGUgSU5ORVJfSFRNTF9BVFRSO1xyXG4gICAgcHJpdmF0ZSBfaGFzU3BlY2lhbFRhZztcclxuICAgIHByaXZhdGUgX2VkaXRvcjtcclxuICAgIHByaXZhdGUgX21vZGVsO1xyXG4gICAgcHJpdmF0ZSBfZWRpdG9ySW5pdGlhbGl6ZWQ7XHJcbiAgICBwcml2YXRlIF9vbGRNb2RlbDtcclxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCB6b25lOiBOZ1pvbmUpO1xyXG4gICAgb25DaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XHJcbiAgICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XHJcbiAgICB3cml0ZVZhbHVlKGNvbnRlbnQ6IGFueSk6IHZvaWQ7XHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICAgIGZyb2FsYUVkaXRvcjogYW55O1xyXG4gICAgZnJvYWxhTW9kZWw6IGFueTtcclxuICAgIHByaXZhdGUgdXBkYXRlRWRpdG9yO1xyXG4gICAgZnJvYWxhTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgZnJvYWxhSW5pdDogRXZlbnRFbWl0dGVyPE9iamVjdD47XHJcbiAgICBwcml2YXRlIHVwZGF0ZU1vZGVsO1xyXG4gICAgcHJpdmF0ZSByZWdpc3RlckV2ZW50O1xyXG4gICAgcHJpdmF0ZSBpbml0TGlzdGVuZXJzO1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVFZGl0b3I7XHJcbiAgICBwcml2YXRlIHNldEh0bWw7XHJcbiAgICBwcml2YXRlIHNldENvbnRlbnQ7XHJcbiAgICBwcml2YXRlIGRlc3Ryb3lFZGl0b3I7XHJcbiAgICBwcml2YXRlIGdldEVkaXRvcjtcclxuICAgIHByaXZhdGUgZ2VuZXJhdGVNYW51YWxDb250cm9sbGVyO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG59XHJcbiJdfQ==