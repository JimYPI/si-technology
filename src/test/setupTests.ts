import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Mock TextEncoder/TextDecoder
class MockTextEncoder {
  encode(input: string): Uint8Array {
    return new Uint8Array(Buffer.from(input));
  }
}

class MockTextDecoder {
  decode(input?: Uint8Array): string {
    if (!input) return '';
    return Buffer.from(input).toString();
  }
}

global.TextEncoder = MockTextEncoder as any;
global.TextDecoder = MockTextDecoder as any;

// Mock localStorage
const localStorageMock = {
  length: 0,
  key: jest.fn((index: number) => null),
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
} as Storage;

global.localStorage = localStorageMock;

// Mock navigator.language
Object.defineProperty(window.navigator, 'language', {
  value: 'en-US',
  configurable: true,
});

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(private callback: IntersectionObserverCallback) {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  }

  observe(target: Element): void {}
  unobserve(target: Element): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver as any;

// Mock ResizeObserver
class MockResizeObserver implements ResizeObserver {
  constructor() {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  }

  observe(target: Element): void {}
  unobserve(target: Element): void {}
  disconnect(): void {}
}

global.ResizeObserver = MockResizeObserver as any;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock fetch
global.fetch = jest.fn();

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});
