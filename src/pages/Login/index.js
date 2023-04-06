import React from 'react';
import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import styles from './styles.module.css';

export default function LoginPage() {
  return (
    <div className={styles.teste}>
      <Card>
        <CardBody>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type={'email'} />
          </FormControl>
        </CardBody>
      </Card>
    </div>
  );
}
