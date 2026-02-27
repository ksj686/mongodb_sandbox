import { useState, useEffect } from 'react';
import './App.css';

interface User {
  _id: string;
  name: string;
  email: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  owner?: User;
  totalTasks?: number;
  completedTasks?: number;
}

const API_BASE = 'http://localhost:5000/api';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Use the new /stats endpoint for projects to get aggregation data
      const [userRes, projectRes] = await Promise.all([
        fetch(`${API_BASE}/users`),
        fetch(`${API_BASE}/projects/stats`)
      ]);

      const userData = await userRes.json();
      const projectData = await projectRes.json();

      setUsers(Array.isArray(userData) ? userData : []);
      setProjects(Array.isArray(projectData) ? projectData : []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="App">Loading dashboard...</div>;

  return (
    <div className="App">
      <h1>MongoDB Sandbox Dashboard</h1>
      <button onClick={fetchData} className="refresh-btn">데이터 새로고침 🔄</button>
      
      <div className="dashboard-grid">
        <section className="dashboard-section">
          <h2>Users ({users.length})</h2>
          <ul>
            {users.length > 0 ? (
              users.map(user => (
                <li key={user._id}>
                  <strong>{user.name}</strong> ({user.email})
                </li>
              ))
            ) : (
              <li>No users found.</li>
            )}
          </ul>
        </section>

        <section className="dashboard-section">
          <h2>Projects ({projects.length})</h2>
          <div className="project-grid">
            {projects.length > 0 ? (
              projects.map(project => (
                <div key={project._id} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="stats-box">
                    <span className="stat-item">전체 할 일: <strong>{project.totalTasks}</strong></span>
                    <span className="stat-item">완료됨: <strong className="done">{project.completedTasks}</strong></span>
                  </div>
                  
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(project.totalTasks || 0) > 0 ? ((project.completedTasks || 0) / (project.totalTasks || 1)) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
