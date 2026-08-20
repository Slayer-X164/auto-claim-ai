import { create } from 'zustand';

interface OrgStore {
  activeOrg: any | null;
  setActiveOrg: (org: any | null) => void;
}

export const useOrgStore = create<OrgStore>((set) => ({
  activeOrg: null,
  setActiveOrg: (org) => set({ activeOrg: org }),
}));
