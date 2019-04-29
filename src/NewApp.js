import React, {Component} from 'react';
import 'bulma/css/bulma.css';
//import AddLanguageFormWithHooks from './components/AddLanguageFormWithHooks';
//import Explorer from './components/Explorer';

const languages = ['Clojure', 'Elixir', 'Go', 'Rust'];
const frequencies = ['Daily', 'Weekly', 'Monthly'];
const projects = [
  {
    name: 'Trendcat',
    author: 'Foobar',
    language: 'Go',
    url: 'http://www.foobar.com',
    stars: 900,
  },
  {
    name: 'Football Maniacs',
    author: 'Baz',
    language: 'Clojure',
    url: 'http://www.clojure.com',
    stars: 10,
  },
];

function AddNewLangForm() {
  return (
    <div className="level-left">
      <div className="level-item">
        <div className="field has-addons">
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Add new language"
            />
          </p>
          <p className="control">
            <button className="button is-outlined">
              <i className="fas fa-plus" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function LanguagesContainer({languages, current}) {
  const langs = languages.map((val, key) => {
    return (
      <a
        className={current === val ? 'button is-active' : 'button'}
        href="#"
        key={key}>
        {val}
      </a>
    );
  });

  return <div>{langs}</div>;
}

function FrequencyContainer({frequencies, current}) {
  const freq = frequencies.map((val, key) => {
    return (
      <p key={key} className="level-item">
        <a
          className={
            current === val
              ? 'button is-small is-rounded is-active'
              : 'button is-small is-rounded'
          }
          href="#">
          {val}
        </a>
      </p>
    );
  });

  return <div className="level-right">{freq}</div>;
}

function ProjectHeader({name}) {
  return <p className="title">{name}</p>;
}

function ProjectContent({project}) {
  return (
    <div>
      <p>
        <span>
          <i className="far fa-user" />
        </span>
        &nbsp;&nbsp;
        <span>{project.author}</span>
      </p>
      <p>
        <span>
          <i className="devicon-go-line colored" />
        </span>
        &nbsp;&nbsp;
        <span>{project.language}</span>
      </p>
      <p>
        <span>
          <i className="fas fa-link" />
        </span>
        &nbsp;&nbsp;
        <span>
          <a href="foobar.com">{project.url}</a>
        </span>
      </p>
      <p>
        <span>
          <i className="far fa-star" />
        </span>
        &nbsp;&nbsp;
        <span>{project.stars}</span>
      </p>
    </div>
  );
}

function ProjectFooter() {
  return (
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          <a href="">
            <i className="fas fa-heart" />
          </a>
        </span>
        &nbsp; &nbsp;
        <span>
          <a href="">
            <i className="fas fa-trash" />
          </a>
        </span>
      </p>
    </footer>
  );
}

function Project(project) {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <ProjectHeader name={project.name} />
          <ProjectContent project={project} />
        </div>
        <ProjectFooter />
      </div>
    </div>
  );
}

function ProjectsContainer({projects}) {
  const _projects = projects.map((project, key) => {
    return <Project key={key} {...project} />;
  });

  return <div className="columns">{_projects}</div>;
}

function MainNavbar(props) {
  return (
    <nav className="level">
      <AddNewLangForm />
      <LanguagesContainer languages={props.languages} current="Clojure" />
      <FrequencyContainer frequencies={props.frequencies} current="Daily" />
    </nav>
  );
}

class NewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: languages,
      frequencies: frequencies,
      projects: projects,
    };
    this.handleAddNewLanguage = this.handleAddNewLanguage.bind(this);
    this.handleChangeFrequency = this.handleChangeFrequency.bind(this);
  }

  handleAddNewLanguage() {}

  handleChangeFrequency() {}

  render() {
    const navbarProps = {
      languages: this.state.languages,
      frequencies: this.state.frequencies,
    };

    return (
      <div className="App">
        <div className="block" />
        <div className="container">
          <MainNavbar {...navbarProps} />
          <div className="block" />
          <ProjectsContainer projects={this.state.projects} />
        </div>
      </div>
    );
  }
}

export default NewApp;
