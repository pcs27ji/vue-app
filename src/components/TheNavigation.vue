<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                        <!-- <router-link class="nav-link active" aria-current="page" to="/">Home</router-link> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="login">Login</router-link>
                        <!-- <a class="nav-link" href="/login">Login</a> -->
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="signup">Signup</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>