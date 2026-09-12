import { 
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,

  // WindDow Configs
  WINDOW_CONFIG,
  INITIAL_Z_INDEX,

  // Resume and WorkEx
  locations
} from "../data";

// Locations type
export type Locations = typeof locations;
export type LocationKey = keyof Locations;

export type WorkLocation = typeof locations.work;
export type AboutLocation = typeof locations.about;
export type ResumeLocation = typeof locations.resume;
export type TrashLocation  = typeof locations.trash;

export type FileNode =
  WorkLocation["children"][number]["children"][number];

// window config
export type WindowConfigType = typeof WINDOW_CONFIG;
export type zIndexType = typeof INITIAL_Z_INDEX;

// Components config
export type NavLinks = typeof navLinks;
export type NavLink = NavLinks[number];

export type NavIcons = typeof navIcons;
export type NavIcon = NavIcons[number];

export type DockApps = typeof dockApps;
export type DockApp = DockApps[number];

export type BlogPosts = typeof blogPosts;
export type BlogPost = BlogPosts[number];

export type TechStacks = typeof techStack;
export type TechStack = TechStacks[number];

export type Socials = typeof socials;
export type Social = Socials[number];

export type PhotosLinks = typeof photosLinks;
export type PhotosLink = PhotosLinks[number];

export type Gallerys = typeof gallery;
export type Gallery = Gallerys[number];

// window types

export type Windowkey = keyof WindowConfigType;

export type WindowState = {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
};

export type WindowType = {
  windows: Record<Windowkey, WindowState>;
  nextZIndex: number;

  openWindow: (windowKey: Windowkey, data?: unknown) => void;
  closeWindow: (windowKey: Windowkey) => void;
  focusWindow: (windowKey: Windowkey) => void;          
}
