//tipos de acciones
const TOGGLE_THEME = 'TOGGLE_THEME';

//acciones
const toggleTheme = (theme) => ({ type: TOGGLE_THEME, payload: theme });

/**
 * Actualiza el tema de la aplicacion
 * 
 */
export const onToggleTheme = (theme) => dispatch => {
    let t = theme === 'light' ? 'dark' : 'light'
    dispatch(toggleTheme(t));
}
