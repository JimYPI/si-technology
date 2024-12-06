import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { TextEncoder, TextDecoder } from 'util';

// Mock TextEncoder/TextDecoder
class MockTextDecoder {
  decode(input?: BufferSource, options?: TextDecodeOptions): string {
    return '';
  }
}

class MockTextEncoder {
  encode(input?: string): Uint8Array {
    return new Uint8Array();
  }
}

(global as any).TextEncoder = MockTextEncoder;
(global as any).TextDecoder = MockTextDecoder;

// Mock localStorage
const localStorageMock = {
  length: 0,
  key: vi.fn((index: number) => null),
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
} as Storage;

(global as any).localStorage = localStorageMock;

// Mock navigator.language
Object.defineProperty(window.navigator, 'language', {
  value: 'en-US',
  configurable: true,
});

// Mock ResizeObserver
class MockResizeObserver implements ResizeObserver {
  constructor(callback: ResizeObserverCallback) {}
  observe(target: Element, options?: ResizeObserverOptions): void {}
  unobserve(target: Element): void {}
  disconnect(): void {}
}

(global as any).ResizeObserver = MockResizeObserver;

// Mock IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '0px';
  readonly thresholds: ReadonlyArray<number> = [0];
  
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
  
  observe(target: Element): void {}
  unobserve(target: Element): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

(global as any).IntersectionObserver = MockIntersectionObserver;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock fetch
global.fetch = vi.fn();

// Clean up after each test
afterEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
});
