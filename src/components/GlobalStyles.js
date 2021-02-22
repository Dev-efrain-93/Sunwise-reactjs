import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};    
    transition: all 0.50s linear;
  } 

  .sidebar {    
    transition: all 0.50s linear;
    background: ${({ theme }) => theme.toggleSidebar}; 
  }

  .sidebar__option--selected {
    background: ${({ theme }) => theme.toggleSidebarOptionSelected}; 
  }
  
  .main__content {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .discover-block__header > div > svg {
    color: ${({ theme }) => theme.discoverBlockHeaderSvg};
  }

  .header {    
    background: ${({ theme }) => theme.toggleHeader}; 
    transition: all 0.50s linear;
  }

  .header > div h2 > svg:last-of-type {
    color: ${({ theme }) => theme.headerSvgMoon};
  }

  .player {
    background: ${({ theme }) => theme.togglePlayer};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .player__album p {
    color: ${({ theme }) => theme.playerAlbumTitle};
  }

  .player__album span {
    background: ${({ theme }) => theme.playerAlbumImg};
  }
  
  `