import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { TextField, Box, Typography, Button, CircularProgress } from '@mui/material';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: '',
    name: '',
    description: '',
    contentTypes: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specifications', specification);
      // Handle success, e.g., reset form or navigate to another page
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Business Name"
        name="name"
        autoComplete="business-name"
        autoFocus
        value={specification.name}
        onChange={handleChange}
        aria-label="Enter business name"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
        id="description"
        label="Description"
        name="description"
        autoComplete="business-description"
        value={specification.description}
        onChange={handleChange}
        aria-label="Enter business description"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="contentTypes"
        label="Content Types (comma-separated)"
        name="contentTypes"
        autoComplete="content-types"
        value={specification.contentTypes.join(',')}
        onChange={(e) => setSpecification({
          ...specification,
          contentTypes: e.target.value.split(',')
        })}
        aria-label="Enter comma-separated content types"
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          loading={loading}
          aria-label="Create business specification"
        >
          Create Business Specification
        </LoadingButton>
      </Box>
      {error && (
        <Typography component="p" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { LoadingButton } from '@mui/lab';
import { TextField, Box, Typography, Button, CircularProgress } from '@mui/material';

interface BusinessSpecification {
  id: string;
  name: string;
  description: string;
  contentTypes: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specification, setSpecification] = useState<BusinessSpecification>({
    id: '',
    name: '',
    description: '',
    contentTypes: []
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpecification({
      ...specification,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-specifications', specification);
      // Handle success, e.g., reset form or navigate to another page
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Business Name"
        name="name"
        autoComplete="business-name"
        autoFocus
        value={specification.name}
        onChange={handleChange}
        aria-label="Enter business name"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
        id="description"
        label="Description"
        name="description"
        autoComplete="business-description"
        value={specification.description}
        onChange={handleChange}
        aria-label="Enter business description"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="contentTypes"
        label="Content Types (comma-separated)"
        name="contentTypes"
        autoComplete="content-types"
        value={specification.contentTypes.join(',')}
        onChange={(e) => setSpecification({
          ...specification,
          contentTypes: e.target.value.split(',')
        })}
        aria-label="Enter comma-separated content types"
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <LoadingButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={loading}
          loading={loading}
          aria-label="Create business specification"
        >
          Create Business Specification
        </LoadingButton>
      </Box>
      {error && (
        <Typography component="p" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;