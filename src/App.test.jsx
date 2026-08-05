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
    }, { timeout: 10000 });

    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
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
  }, 15000);

  it('switches tab and shows correct section', async () => {
    const user = userEvent.setup();
    renderApp();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /About|Hakkımda/i })).toBeInTheDocument();
    }, { timeout: 10000 });

    const aboutBtn = screen.getByRole('button', { name: /About|Hakkımda/i });
    await user.click(aboutBtn);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Hakkımda|About/i })).toBeInTheDocument();
    });
  }, 15000);

  it('switches to projects tab and filters by category', async () => {
    const user = userEvent.setup();
    renderApp();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Archive|Arşiv/i })).toBeInTheDocument();
    }, { timeout: 10000 });

    const projectsBtn = screen.getByRole('button', { name: /Archive|Arşiv/i });
    await user.click(projectsBtn);

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /Mobile|Mobil/i })).toBeInTheDocument();
    });

    const mobileFilter = screen.getByRole('tab', { name: /Mobile|Mobil/i });
    await user.click(mobileFilter);

    expect(screen.getAllByText(/ARK4UTH Authenticator/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByText(/Kristal Geyik/i)).not.toBeInTheDocument();
  }, 20000);
});
