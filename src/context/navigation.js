import { Children } from 'react';
import { createContext } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
	return (
		<NavigationContext.Provider value={{}}>
			{children}
		</NavigationContext.Provider>
	);
};

export { NavigationProvider };
export default NavigationContext;
