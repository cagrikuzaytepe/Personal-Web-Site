import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

const renderApp = () =>
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders hero and primary navigation', async () => {
    renderApp();

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: /Kadir Çağrı Kuzaytepe/i })).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Projects|Projeleri Gör/i })).toBeInTheDocument();
  });

  it('switches language when toggle is clicked', async () => {
    const user = userEvent.setup();
    renderApp();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Switch language|Dili/i })).toBeInTheDocument();
    }, { timeout: 10000 });

    const toggle = screen.getByRole('button', { name: /Switch language|Dili/i });
    await user.click(toggle);

    expect(document.documentElement.lang).toBe('tr');
    expect(screen.getByRole('heading', { name: /Hakkımda/i })).toBeInTheDocument();
  }, 15000);

  it('filters archive projects by category', async () => {
    const user = userEvent.setup();
    renderApp();

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /Mobile|Mobil/i })).toBeInTheDocument();
    }, { timeout: 5000 });

    const mobileFilter = screen.getByRole('tab', { name: /Mobile|Mobil/i });
    await user.click(mobileFilter);

    expect(screen.getAllByText(/ARK4UTH Authenticator/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/Kristal Geyik/i)).not.toBeInTheDocument();
  });
});
