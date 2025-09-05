import { useDialogStore } from '../store/dialogStore'

export const useDialog = () => {
  const openDialog = useDialogStore((state) => state.openDialog)
  return { openDialog }
}
