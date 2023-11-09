import create from "zustand"; // create로 zustand를 불러옵니다.

const useStore = create((set) => ({
  isDark: 0,
  setIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;
