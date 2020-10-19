import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Page from '../components/Page';
import Section from '../components/Section';

export default function Applications() {
  return (
    <Page>
      <Section title='Future Mobility Solutions' variant='h2'>
        <Typography>
          The future connected mobility requires end-to-end and sophisticated infrastructures among the vehicles,
          environment and roadway information systems. LG helps the world’s leading OEMs and suppliers harness the power
          of autonomous driving technologies and solutions to simulate and accelerate the service innovation, optimize
          vehicle performance, gain insight from data and take advantage of the cloud platform to scale the mobility
          operations.
        </Typography>
        <Button color='primary' variant='contained'>
          Request Demo
        </Button>
      </Section>

      <Section flip title='Simulation for end-to-end development cycle'>
        <Typography>
          LGSVL Simulator supports end-to-end simulation of the entire autonomous driving software stack. By providing
          all necessary inputs needed from a virtual environment, reacting to controls, and simulating the situations a
          vehicle may encounter, developers can perform integration testing of their system from the very beginning of
          the development cycle. In addition to performing modular component-wise testing, developers can perform
          end-to-end testing to shorten the iteration cycle for finding and testing integration considerations of their
          autonomous system.
        </Typography>
      </Section>

      <Section title='Data and content'>
        <Typography>
          LG supports a wide array of sensors such as camera, LiDAR, RADAR, CGP, and IMU hardware sensors for simulation
          as well as virtual ground truth sensors. Real world sensor models used in the autonomous vehicle systems and
          other sensors through plugins are also supported in LGSVL Simulator.
        </Typography>
        <Typography>
          The 3D environment is the basis for environmental simulation and impacts all sensor data, affects an AD
          system’s perception, prediction, tracking and control modules. LGSVL Simulator Premium Platform’s Digital Twin
          enables the creation of synthetic 3D environments, for replication and simulation of logged real-world
          scenarios. Through Digital Twin environments, test drives recorded and logged in the real world can be
          imported into simulation to re-simulate particularly targeted edge case scenarios.
        </Typography>
      </Section>

      <Section title='Cloud simulation as a service' flip>
        <Typography>
          Simulation in the cloud at scale is one of the important features requested by developers working on
          autonomous vehicle software. Perception module development requires a vast amount of labeled data specific to
          vehicle sensor configuration, however data labeling is mostly manual process and time consuming. Simulators
          could be used to produce synthetic labeled data at large scale in the cloud.
        </Typography>
        <Typography>
          LGSVL Simulator also accelerates and facilitates reinforcement learning for Planning module development which
          requires millions of runs in order to find optimal behavior. LGSVL Simulator features out of box integration
          with OpenAI Gym environment that allows for running faster than real time locally and in the cloud either as
          an on-premise or private cloud configuration.
        </Typography>
      </Section>
    </Page>
  );
}
