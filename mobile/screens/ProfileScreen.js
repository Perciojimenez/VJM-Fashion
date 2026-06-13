import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  Appbar,
  Text,
  Card,
  Button,
  Avatar,
} from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';
import theme from '../utils/theme';

const ProfileScreen = ({ navigation }) => {
  const { user, userProfile, signout } = useAuth();

  const handleLogout = async () => {
    await signout();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Mi Perfil" />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        <View style={styles.avatarContainer}>
          <Avatar.Text
            size={80}
            label={userProfile?.full_name?.charAt(0).toUpperCase() || 'U'}
            style={styles.avatar}
          />
        </View>

        <Card style={styles.profileCard}>
          <Card.Content>
            <Text variant="headlineSmall" style={styles.name}>
              {userProfile?.full_name || 'Usuario'}
            </Text>

            <Text variant="bodySmall" style={styles.email}>
              {user?.email}
            </Text>

            <Text
              variant="labelSmall"
              style={styles.role}
            >
              {userProfile?.role === 'admin' && 'Administrador'}
              {userProfile?.role === 'customer' && 'Cliente'}
              {userProfile?.role === 'vendor' && 'Vendedor'}
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.infoCard}>
          <Card.Title title="Información de Cuenta" />
          <Card.Content>
            <View style={styles.infoRow}>
              <Text variant="labelSmall" style={styles.infoLabel}>
                Email Verificado
              </Text>
              <Text variant="bodySmall">
                {user?.email_confirmed_at ? '✓ Sí' : '✗ No'}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text variant="labelSmall" style={styles.infoLabel}>
                Miembro desde
              </Text>
              <Text variant="bodySmall">
                {new Date(userProfile?.created_at).toLocaleDateString('es-ES')}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.menuCard}>
          <Card.Content>
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('EditProfile')}
              style={styles.menuButton}
            >
              Editar Perfil
            </Button>

            <Button
              mode="outlined"
              onPress={() => navigation.navigate('ChangePassword')}
              style={styles.menuButton}
            >
              Cambiar Contraseña
            </Button>

            <Button
              mode="outlined"
              onPress={() => alert('Soporte técnico en desarrollo')}
              style={styles.menuButton}
            >
              Centro de Ayuda
            </Button>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={handleLogout}
          buttonColor={theme.colors.error}
          style={styles.logoutButton}
        >
          Cerrar Sesión
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
  profileCard: {
    marginBottom: 12,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  email: {
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  role: {
    color: theme.colors.primary,
    marginTop: 8,
    fontWeight: '600',
  },
  infoCard: {
    marginBottom: 12,
    backgroundColor: theme.colors.surface,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
  },
  infoLabel: {
    color: theme.colors.textSecondary,
  },
  menuCard: {
    marginBottom: 12,
    backgroundColor: theme.colors.surface,
  },
  menuButton: {
    marginBottom: 8,
  },
  logoutButton: {
    marginVertical: 16,
  },
});

export default ProfileScreen;