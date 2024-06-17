'use client'
import { useForm } from 'react-hook-form';
import styles from './Connexion.module.css';

export default function ConnexionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = data => {
        console.log(data);
        if (data.email === 'user@example.com' && data.password === 'password') {
            alert('Login successful');
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                Courriel:
                <input
                    type="email"
                    {...register("email", {
                        required: 'Champ obligatoire',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Courriel non valide'
                        }
                    })}
                    placeholder='votre courriel'
                />
                <div className={styles.erreur}>{errors.email?.message}</div>
            </label>
            <label>
                Mot de passe:
                <input
                    type="password"
                    {...register("password", {
                        required: 'Champ obligatoire',
                        minLength: {
                            value: 6,
                            message: "Le mot de passe doit contenir au moins 6 caractères"
                        }
                    })}
                    placeholder='votre mot de passe'
                />
                <div className={styles.erreur}>{errors.password?.message}</div>
            </label>
            <button type="submit">Se connecter</button>
        </form>
    );
}