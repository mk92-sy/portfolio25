import { create } from 'zustand';

export type DialogType = 'alert' | 'confirm';

interface DialogState {
  isOpen: boolean;
  type: DialogType;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm?: () => void;
  openDialog: (options: Partial<Omit<DialogState, 'isOpen' | 'openDialog' | 'closeDialog'>>) => void;
  closeDialog: () => void;
}

let lastFocusedElement: HTMLElement | null = null;

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  type: 'alert',
  title: '',
  message: '',
  confirmText: '확인',
  cancelText: '취소',
  onConfirm: undefined,

  openDialog: (options) => {
    lastFocusedElement = document.activeElement as HTMLElement;
    set({
        isOpen: true,
        type: options.type ?? 'alert',
        title: options.title ?? '',
        message: options.message ?? '',
        confirmText: options.confirmText ?? '확인',
        cancelText: options.cancelText ?? '취소',
        onConfirm: options.onConfirm,
    })
  },

  closeDialog: () => {
    set({ isOpen: false });
    setTimeout(()=>{
        lastFocusedElement?.focus();
    },0)
  },
}));
