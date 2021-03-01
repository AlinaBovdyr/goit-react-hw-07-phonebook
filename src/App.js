import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { fetchContact } from './redux/contacts-operations';
import { getAllContacts, getIsLoading } from './redux/selectors';

import Container from './components/Container';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Sorter from './components/Sorter';
import Modal from './components/UI/Modal/Modal';
import Notice from './components/Notice';
import LoaderView from './components/UI/Loader';

import './styles/animations/Fade.css';
import './styles/animations/ModalAppear.css';
import './styles/animations/NoticeAppear.css';
import './styles/animations/ContactListAppear.css';

class App extends PureComponent {
  state = {
    showModal: false,
    error: false,
    text: ''
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showNotice = (contactName) => {
    this.setState({
        text: `${contactName} is already in contacts!`,
        error: true,
        showModal: false,
    });
    
    setTimeout(() => {
        this.setState({ error: false, })
    }, 2000);
  }

  render() {
    const { showModal, error, text } = this.state;
    const { contacts, isLoading } = this.props;

    return (
      <Container>
        <Header onClick={this.toggleModal} />

        {isLoading && <LoaderView />}
        
        <CSSTransition
          in={error}
          unmountOnExit
          classNames="notice"
          timeout={250}
        >
          <Notice text={text} />
        </CSSTransition>
        

        <CSSTransition
          in={showModal}
          unmountOnExit
          classNames="modal"
          timeout={500}
        >
          <Modal onClose={this.toggleModal}>
            <ContactForm onSave={this.toggleModal} onSubmit={this.showNotice} />
          </Modal>
        </CSSTransition>

        <CSSTransition
          in={contacts.length > 1}
          unmountOnExit
          classNames="fade"
          timeout={250}
        >
          <div>
            <Filter />
            <Sorter />
          </div>
        </CSSTransition>

        <CSSTransition
          in={true}
          appear={true}
          unmountOnExit
          classNames="item-fade"
          timeout={500}
        >
          <ContactList />
        </CSSTransition>
        
        </Container>
    );
  }
};

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContact())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
