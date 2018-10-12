// @flow
import React, { Component } from 'react';
import GenericObjectView from '../../components/genericObjView';
import Layout from 'arc-design/components/layout';
import NavBar from '../../components/navbar';
import ConfigInput from '../../components/configInput';
import QlikContent from '../QlikContent';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ConfigActions from '../../actions/config';
import type { Config } from '../../reducers/types';

import './homepage.css';

type Props = {
  config: Config,
  setConfig: (config: Config) => void,
  removeConfig: () => void
};

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ConfigActions, dispatch);
}

const HomePage = (props: Props) => {
  const { setConfig, removeConfig/*, config*/ } = props;
  
  /*** DELETE THIS LATER ***/
  const config = {
    host: 'localhost',
    port: 9076,
    appname: 'drugcases.qvf'
  };
  /*** DELETE THIS LATER ***/
  let content;
  if (config.host && config.appname && config.port) {
    content = <QlikContent />
  } else {
    content = <ConfigInput onSubmit={setConfig} />;
  }
    return (
      <div className="homeView">
        <Layout>
          <Layout.PrimaryHeader>
            <NavBar />
          </Layout.PrimaryHeader>
          <Layout.Sidebar> </Layout.Sidebar>
          {content}
        </Layout>
      </div>
    );
};

// export default HomePage;

// $FlowFixMe
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
