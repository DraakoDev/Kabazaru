import { useAuth } from "../hooks/useAuth";

export const VistaCliente = () => {

    const {
        user,
        logout,
        loading,
        error
    } = useAuth();


    const handleLogout = () => {

        logout();

        window.location.href = "/";

    };

    if (loading) {

        return (

            <div className="contenedor-loading">

                <h2>Cargando información...</h2>

            </div>

        );

    }


    return (

        <div className="cliente-container">

            {/* ==========================
                SIDEBAR
            ========================== */}
            <aside className="sidebar">

                <div className="logo">

                    <h2>Kabazaru</h2>

                </div>

                <nav className="menu">

                    <button className="menu-btn">
                        Inicio
                    </button>

                    <button className="menu-btn">
                        Vehículos
                    </button>

                    <button className="menu-btn">
                        Compras
                    </button>

                    <button className="menu-btn">
                        Perfil
                    </button>

                </nav>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>

            </aside>

            {/* ==========================
                CONTENIDO
            ========================== */}
            <main className="contenido">

                {/* ======================
                    HEADER
                ====================== */}
                <header className="header">

                    <div>

                        <h1>
                            Bienvenido,
                            {" "}
                            {user?.nombre_usuario}
                        </h1>

                        <p>
                            Panel principal del cliente
                        </p>

                    </div>

                </header>

                {/* ======================
                    ERROR
                ====================== */}
                {
                    error && (

                        <div className="error-box">

                            <p>{error}</p>

                        </div>

                    )
                }

                {/* ======================
                    TARJETAS
                ====================== */}
                <section className="cards-container">

                    <div className="card">

                        <h3>Vehículos Disponibles</h3>

                        <p>
                            Explora el catálogo completo
                            de vehículos disponibles.
                        </p>

                    </div>

                    <div className="card">

                        <h3>Mis Compras</h3>

                        <p>
                            Consulta tus vehículos
                            comprados recientemente.
                        </p>

                    </div>

                    <div className="card">

                        <h3>Mi Perfil</h3>

                        <p>
                            Administra tu información
                            personal.
                        </p>

                    </div>

                </section>

                {/* ======================
                    TABLA
                ====================== */}
                <section className="tabla-section">

                    <h2>
                        Últimos Vehículos
                    </h2>

                    <table className="tabla">

                        <thead>

                            <tr>

                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Precio</th>
                                <th>Estado</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Toyota</td>
                                <td>Corolla 2024</td>
                                <td>$90.000.000</td>
                                <td>Disponible</td>

                            </tr>

                            <tr>

                                <td>Mazda</td>
                                <td>CX-5</td>
                                <td>$120.000.000</td>
                                <td>Disponible</td>

                            </tr>

                            <tr>

                                <td>Kia</td>
                                <td>Sportage</td>
                                <td>$110.000.000</td>
                                <td>Vendido</td>

                            </tr>

                        </tbody>

                    </table>

                </section>

            </main>

        </div>

    );

};
