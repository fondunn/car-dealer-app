import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

type KeysType = 'makeId' | 'year';

interface HandleChangeProps {
  value: string;
  key: KeysType;
}

interface SelectionState {
  makeId: null | string;
  year: null | string;
}

const initialState = {
  makeId: null,
  year: null,
};
export const useCarsSelector = () => {
  const router = useRouter();
  const [{ makeId, year }, setSelections] =
    useState<SelectionState>(initialState);

  const handleChangeSelect = ({ value, key }: HandleChangeProps) => {
    setSelections((curr) => ({ ...curr, [key]: value }));
  };

  const handleClickLink = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (!makeId || !year) return;
      const path = `result/${makeId}/${year}`;
      router.push(path);
    },
    [makeId, year, router],
  );

  const href = `result/${makeId}/${year}`;

  const linkDisabled = !makeId || !year;
  return {
    handleChangeSelect,
    handleClickLink,
    href,
    linkDisabled,
  };
};
