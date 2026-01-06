import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import LoginPage from './page'
import DashboardPage from './dashboard/page'
import DashboardCreatePost from './dashboard/create-post/page'
import DashboardSchedule from './dashboard/schedule/page'
import DashboardUsers from './dashboard/users/page'
import DashboardSettings from './dashboard/settings/page'

import UserDashboardPage from './user/page'
import UserCreatePost from './user/create-post/page'
import UserSchedule from './user/schedule/page'
import UserAnalytics from './user/analytics/page'
import UserContentLibrary from './user/content-library/page'
import UserTemplates from './user/templates/page'
import UserHashtags from './user/hashtags/page'
import UserTeam from './user/team/page'
import UserCompetitors from './user/competitor-analysis/page'
import UserAISuggestions from './user/ai-suggestions/page'
import UserBulkUpload from './user/bulk-upload/page'
import UserSocialAccounts from './user/social-accounts/page'
import UserSettings from './user/settings/page'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/create-post" element={<DashboardCreatePost />} />
        <Route path="/dashboard/schedule" element={<DashboardSchedule />} />
        <Route path="/dashboard/users" element={<DashboardUsers />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />

        {/* User Routes */}
        <Route path="/user" element={<UserDashboardPage />} />
        <Route path="/user/create-post" element={<UserCreatePost />} />
        <Route path="/user/schedule" element={<UserSchedule />} />
        <Route path="/user/analytics" element={<UserAnalytics />} />
        <Route path="/user/content-library" element={<UserContentLibrary />} />
        <Route path="/user/templates" element={<UserTemplates />} />
        <Route path="/user/hashtags" element={<UserHashtags />} />
        <Route path="/user/team" element={<UserTeam />} />
        <Route path="/user/competitor-analysis" element={<UserCompetitors />} />
        <Route path="/user/ai-suggestions" element={<UserAISuggestions />} />
        <Route path="/user/bulk-upload" element={<UserBulkUpload />} />
        <Route path="/user/social-accounts" element={<UserSocialAccounts />} />
        <Route path="/user/settings" element={<UserSettings />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
