import { TagContainer } from './styles'

const Tag = ({ children, size='small' }) => (
	<TagContainer size={size}>{children}</TagContainer>
);

export default Tag;