const StatusBadge = ({ label, variant = 'default' }) => (
  <span className={`status-badge status-badge--${variant}`}>{label}</span>
);

export default StatusBadge;
