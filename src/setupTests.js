import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

class MockIntersectionObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

HTMLCanvasElement.prototype.getContext = () => ({
  fillStyle: '',
  font: '',
  fillRect: () => {},
  clearRect: () => {},
  fillText: () => {},
  measureText: () => ({ width: 0 }),
});
