import React from 'react';
import Icon from 'components/Icon';
import styles from 'css/common/layout';


export default function MainSpinner() {
	return (
		<div className={ styles.mainInit }>
			<Icon type="spinner" spin={ true } />
		</div>
	);
}
