import styled from "styled-components";

const NavBarS = styled.div`

  .menu-container {
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 102;
  }

  .menu-icon {
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .menu {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    padding: 10px;
    margin-top: 10px;
    transform: scale(0);
    transform-origin: left top;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
  }

  .menu.open {
    transform: scale(1);
    opacity: 1;
  }

  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    transition: background 0.3s ease;
  }

  .menu-item:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  /* ===== ÍCONES (react-icons) ===== */
  .menu-icon-item {
    font-size: 28px;
    color: white;
    transition: transform 0.3s ease;
  }

  .menu-item:hover .menu-icon-item {
    transform: scale(1.15);
  }

  .menu-label {
    position: absolute;
    left: 55px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 0.85rem;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
    pointer-events: none;
  }

  .menu-item:hover .menu-label {
    opacity: 1;
    transform: translateX(0);
  }

  .change-language {
    font-family: "Inter", sans-serif;
    font-size: 1em;
    color: white;
    background: transparent;
    border: 2px solid white;
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 8px 16px;
    border-radius: 5px;
    transition: background 0.3s ease, color 0.3s ease;
    z-index: 102;
  }

  .change-language:hover {
    background: white;
    color: black;
  }

  .socialIcons {
    position: fixed;
    bottom: 15px;
    left: 15px;
    display: flex;
    gap: 8px;
    z-index: 102;
  }

  .icons {
    color: #fff;
    font-size: 26px;
    transition: transform 0.2s;
  }

  .icons:hover {
    transform: scale(1.1);
  }

  /* ===== RESPONSIVO ===== */
  @media (max-width: 768px) {
    .menu-container {
      top: 5px;
      left: 5px;
    }

    .menu {
      padding: 8px;
    }

    .menu-icon-item {
      font-size: 24px;
    }

    .menu-label {
      font-size: 0.75rem;
      left: 50px;
    }

    .change-language {
      font-size: 0.85em;
      padding: 6px 12px;
      top: 5px;
      right: 5px;
    }

    .socialIcons {
      bottom: 10px;
      right: 10px;
    }

    .icons {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    .menu-icon {
      font-size: 1.8rem;
    }

    .menu-item {
      padding: 8px;
    }

    .menu-icon-item {
      font-size: 22px;
    }

    .menu-label {
      font-size: 0.7rem;
      left: 45px;
    }

    .change-language {
      font-size: 0.75em;
      padding: 5px 10px;
    }

    .socialIcons {
      bottom: 8px;
      right: 8px;
    }

    .icons {
      font-size: 20px;
    }
  }
`;

export default NavBarS;
