import AppRoutes from '@routes/AppRoutes.jsx';
import Providers from '@providers/Providers.jsx';
import { Toaster } from 'sonner';

const App = () => (
	<Providers>
		<Toaster richColors/>
		<AppRoutes />
	</Providers>
);

export default App;