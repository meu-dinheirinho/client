import {
  HiOutlineUserCircle,
  HiOutlineWallet,
  HiOutlineRectangleGroup,
  HiOutlineArrowsRightLeft,
  HiOutlineCog6Tooth,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2';

export const MENU_ITEMS = [
  { name: 'Dashboard', icon: HiOutlineRectangleGroup, path: 'dashboard' },
  { name: 'Lançamentos', icon: HiOutlineArrowsRightLeft, path: 'book-entry' },
  { name: 'Minha carteira', icon: HiOutlineWallet, path: 'my-wallet' },
  { name: 'Contas', icon: HiOutlineUserCircle, path: 'accounts' },
];

export const EXTRA_MENU_ITEMS = [
  { name: 'Configurações', icon: HiOutlineCog6Tooth, path: 'settings' },
  { name: 'Centro de ajuda', icon: HiOutlineQuestionMarkCircle, path: 'helper' },
];
