import ProfileModel from "../models/profileModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthController {
    // Listar todos os usuários
    async getAllprofile(req, res) {
        try {
            const profiles = await ProfileModel.findAll();
            res.json(profiles);
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            res.status(500).json({ error: "Erro ao listar usuários" });
        }
    }

    // Listar perfil por ID
    async getProfileById(req, res) {
        try {
            const { id } = req.params;
            const profile = await ProfileModel.findById(id);

            if (!profile) {
                return res.status(404).json({ error: "Perfil não encontrado!" });
            }

            res.json(profile);
        } catch (error) {
            console.error("Erro ao listar perfil:", error);
            res.status(500).json({ error: "Erro ao listar perfil" });
        }
    }

    // Registrar novo usuário
    async register(req, res) {
        try {
            const { name, email, password, biography, avatar } = req.body;

            // Validação básica
            if (!name || !email || !password) {
                return res
                    .status(400)
                    .json({ error: "Os campos nome, email e senha são obrigatórios!" });
            }

            // Validação da imagem do avatar
            if (avatar && !avatar.endsWith(".png") && !avatar.endsWith(".jpg") && !avatar.endsWith(".jpeg")) {
                return res
                    .status(400)
                    .json({ error: "O avatar deve ser uma imagem PNG, JPG ou JPEG!" });
            }

            // Verificar se o usuário já existe
            const profileExists = await ProfileModel.findByEmail(email);
            if (profileExists) {
                return res.status(400).json({ error: "Este email já está em uso!" });
            }

            // Hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);

            // Criar objeto do usuário
            const data = {
                name,
                email,
                password: hashedPassword,
                biography,
                avatar,
            };

            // Criar perfil
            const profile = await ProfileModel.create(data);

            return res.status(201).json({
                message: "Usuário criado com sucesso!",
                profile,
            });
        } catch (error) {
            console.error("Erro ao criar um novo usuário: ", error);
            res.status(500).json({ error: "Erro ao criar um novo usuário" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;

            // Validação básica
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ error: "Os campos email e senha são obrigatórios!" });
            }

            // Verificar se o perfil existe
            const profileExists = await ProfileModel.findByEmail(email);
            if (!profileExists) {
                return res.status(401).json({ error: "Credenciais inválidas!" });
            }

            // Verificar senha
            const isPasswordValid = await bcrypt.compare(
                password,
                profileExists.password
            );
            if (!isPasswordValid) {
                return res.status(401).json({ error: "Credenciais inválidas!" });
            }

            // Gerar Token JWT
            const token = jwt.sign(
                {
                    id: profileExists.id,
                    name: profileExists.name,
                    email: profileExists.email,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            );

            return res.json({
                message: "Login realizado com sucesso!",
                token,
                profileExists,
            });
        } catch (error) {
            console.error("Erro ao fazer login: ", error);
            res.status(500).json({ error: "Erro ao fazer login!" });
        }
    }
}

export default new AuthController();
