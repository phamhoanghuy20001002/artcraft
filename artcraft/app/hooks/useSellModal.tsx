import { create } from 'zustand'
interface useSellModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const useSellModal = create<useSellModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))
export default useSellModal