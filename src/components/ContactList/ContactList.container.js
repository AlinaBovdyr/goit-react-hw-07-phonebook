import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import { getSortContacts } from '../../redux/selectors';
import ContactList from './ContactList';

const mapStateToProps = (state) => ({
    contacts: getSortContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
