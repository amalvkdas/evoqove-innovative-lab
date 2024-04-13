
const ApplicationTypeFilter = () => {
  return (
    <div>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }} className="hanken-grotesk-500">Application type</h3>
      <ul style={{ listStyleType: 'none', padding: '0', fontSize: '0.9rem',lineHeight:"2.5"}} className="hanken-grotesk-300">
        <li><input type="checkbox" style={{ borderRadius: '50%', marginRight: '5px' }} />Web based applications</li>
        <li><input type="checkbox" style={{ borderRadius: '50%', marginRight: '5px' }} />Mobile applications</li>
      </ul>
    </div>
  );
};

export default ApplicationTypeFilter;