import React, { useState, useEffect, ReactNode, useRef } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';
import { determineRect } from '../../../../utils/js/determineRect';

interface IDropdownProps {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

interface IListStyleState {
  top: number;
  right: number;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [isDropdownOpen]);

  const portalNode = document.getElementById('dropdown_root');

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [listStyle, setListStyle] = useState<IListStyleState>({
    top: 0,
    right: 0,
  });

  const determineCoords = () => {
    setListStyle(determineRect(containerRef));
  };

  function handleClick(event: MouseEvent) {
    determineCoords();
    if (
      event.target instanceof Node &&
      !buttonRef.current?.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    window.addEventListener('resize', determineCoords);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', determineCoords);
    };
  }, []);

  const handleOpen = () => {
    if (isOpen === undefined) setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div ref={buttonRef} onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen &&
        portalNode &&
        ReactDOM.createPortal(
          <div className={styles.list} style={listStyle}>
            {children}
          </div>,
          portalNode
        )}
    </div>
  );
}
