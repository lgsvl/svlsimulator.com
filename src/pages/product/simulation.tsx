import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Section from '../../components/Section';
import Page from '../../components/Page';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { themed } from '../../utils/theme';

const Caption = themed(Typography)`
  display: block;
`;

export default function Simulation() {
  return (
    <Page>
      <Section title='End-to-end simulation platform' variant='h2'>
        <Typography>
          3D photorealistic simulation software for AD and robotics. Support for all kinds of testing: unit, modular,
          integration, system, distributed simulation, Out-of-the-box integration with open source and popular AD
          stacks.
        </Typography>
        <Button color='primary' variant='contained'>
          Request Demo
        </Button>
      </Section>

      <Section title='Open source and extensible simulation engine' flip>
        <Typography>
          Open source and customizable Easy-to-use Python API Plugin system for vehicles, sensors, bridge interfaces
          Co-simulation support - FMI/FMU, CarMaker, SUMO.
        </Typography>
      </Section>

      <Section title='Diverse set of scenario generation tools for scalable testing'>
        <Typography>
          Visual scenario editor HD map import, export, and annotation tools Support for scenario description languages
          Resimulation from simulation and real world datasets Random mode for smoke testing and increased edge case
          test coverage
        </Typography>
      </Section>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              Free
              <Caption variant='caption'>
                Featuring open source version LGSVL Simulator for internal R&amp;D use, not permitted for commercial
                deployment
              </Caption>
            </TableCell>
            <TableCell>
              Premium
              <Caption variant='caption'>
                Next generation LGSVL Simulator including open source simulation tools, cloud and content
              </Caption>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Basic simulation</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Simulation analysis</TableCell>
            <TableCell>🚫</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cloud simulation</TableCell>
            <TableCell>🚫</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Content creation/environment generation</TableCell>
            <TableCell>🚫</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Scenario generation</TableCell>
            <TableCell>🚫</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Plugins/Third Party Support</TableCell>
            <TableCell>🚫</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button color='primary' variant='contained'>
        Request Demo
      </Button>
    </Page>
  );
}
